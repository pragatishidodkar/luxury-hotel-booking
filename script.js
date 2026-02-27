const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const roomType = document.getElementById("roomType");
const nightsDisplay = document.getElementById("nights");
const totalPrice = document.getElementById("totalPrice");

const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

checkin.addEventListener("change", () => {
    checkout.setAttribute("min", checkin.value);
    calculate();
});

checkout.addEventListener("change", calculate);
roomType.addEventListener("change", calculate);

function calculate() {
    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);

    if (checkin.value && checkout.value && checkoutDate > checkinDate) {
        const timeDiff = checkoutDate - checkinDate;
        const nights = timeDiff / (1000 * 3600 * 24);

        nightsDisplay.textContent = nights;

        let pricePerNight = roomType.value;
        let total = nights * pricePerNight;

        // 20% discount
        total = total - (total * 0.2);

        totalPrice.textContent = "$" + total;
    }
}
