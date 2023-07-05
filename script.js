window.addEventListener("load", function() {
    const form = document.getElementById("booking-form");
    const totalDaysInput = document.getElementById("total-days");
    const roomTypeSelect = document.getElementById("room-type");
    const amenitiesSelect = document.getElementById("amenities");
    const advanceAmountInput = document.getElementById("advance-amount");
    const totalRoomCostInput = document.getElementById("total-room-cost");
    const totalAmenitiesCostInput = document.getElementById("total-amenities-cost");
    const totalCostInput = document.getElementById("total-cost");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      calculateTotalCost();
    });
  
    totalDaysInput.addEventListener("input", calculateTotalCost);
    roomTypeSelect.addEventListener("change", calculateTotalCost);
    amenitiesSelect.addEventListener("change", calculateTotalCost);
    advanceAmountInput.addEventListener("input", calculateTotalCost);
  
    function calculateTotalCost() {
      const totalDays = parseInt(totalDaysInput.value);
      const roomType = roomTypeSelect.value;
      const amenities = amenitiesSelect.value;
      const advanceAmount = parseInt(advanceAmountInput.value);
      let amenitieroomRate, sCost;
  
      if (roomType === "deluxe-room") {
        roomRate = 2500;
      } else if (roomType === "suite-room") {
        roomRate = 4000;
      }
  
      if (amenities === "ac") {
        amenitiesCost = 1000;
      } else if (amenities === "locker") {
        amenitiesCost = 300;
      }
  
      const totalRoomCost = roomRate * totalDays;
      const totalAmenitiesCost = amenitiesCost * totalDays;
      const totalCost = totalRoomCost + totalAmenitiesCost;
  
      totalRoomCostInput.value = totalRoomCost;
      totalAmenitiesCostInput.value = totalAmenitiesCost;
      totalCostInput.value = totalCost;
  
      const balanceAmount = totalCost - advanceAmount;
      console.log("Balance Amount:", balanceAmount);
    }
  });
  