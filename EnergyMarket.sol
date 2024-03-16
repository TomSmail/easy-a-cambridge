// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EnergyMarket {
    address public owner;
    uint256 public greenEnergyBonus = 1; // Example bonus amount for green energy transactions

    struct Supplier {
        bool isGreenEnergy;
        uint256 totalSupplied;
    }

    struct Order {
        address buyer;
        address supplier;
        uint256 quantity;
        uint256 value; 
        bool isGreenOrder;
        }


    mapping(address => Supplier) public suppliers;
    mapping(uint256 => Order) public orders; // Maps an order ID to an Order
    uint256 public nextOrderId;

    // Add your mappings here for deposits and rewardedUsers if needed

    event OrderPlaced(uint256 orderId, address buyer, address supplier, uint256 quantity, uint256 value, bool isGreenOrder);
    event OrderFulfilled(uint256 orderId, address buyer, address supplier, uint256 quantity, uint256 value, bool isGreenOrder);

    constructor() {
        owner = msg.sender;
    }

    // Additional functions will follow

    function registerSupplier(address _supplier, bool _isGreenEnergy) public {
        // This could be restricted to the contract owner or another authorization mechanism
        suppliers[_supplier] = Supplier(_isGreenEnergy, 0);
    }

    function placeOrder(address _supplier, uint256 quantity, uint256 value) public payable {
        require(msg.value >= value, "Insufficient balance for payment");


        // Assume excess payment is refunded to the buyer
        if(msg.value > value) {
            payable(msg.sender).transfer(msg.value - value);
        }

        uint256 orderId = nextOrderId++;
        bool isGreenOrder = suppliers[_supplier].isGreenEnergy;
        orders[orderId] = Order(msg.sender, _supplier, quantity, value, isGreenOrder);
        emit OrderPlaced(orderId, msg.sender, _supplier, quantity, value, isGreenOrder);
    }


    function fulfillOrder(uint256 _orderId) public {
        Order storage order = orders[_orderId];
        require(msg.sender == order.supplier, "Only the supplier can fulfill this order.");

        // Calculate the net payment to supplier
        uint256 netPayment = (order.value * 95) / 100;
        // Transfer net payment to the supplier
        payable(order.supplier).transfer(netPayment);

        // Handle green energy bonus if applicable
        if (order.isGreenOrder) {
            uint256 bonusAmount = greenEnergyBonus * order.quantity;
            // Transfer bonus to both buyer and supplier
            payable(order.buyer).transfer(bonusAmount);
            payable(order.supplier).transfer(bonusAmount);
        }

        suppliers[order.supplier].totalSupplied += order.quantity; // Update total supplied
        emit OrderFulfilled(_orderId, order.buyer, order.supplier, order.quantity, order.value, order.isGreenOrder);
    }


    receive() external payable {}



}
