// TERRA GLIDE - FARMER CONNECT

// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("show");
  });
});

// 2. CROP GUIDE
const cropData = {
  rice: {
    name: "Rice / Paddy",
    description: "Rice is a cereal crop commonly grown in warm conditions. Water management and suitable varieties are important considerations.",
    soil: "Clayey / loamy",
    tip: "Water management"
  },
  wheat: {
    name: "Wheat",
    description: "Wheat is an important cereal crop. Temperature, timely sowing and appropriate irrigation are important factors.",
    soil: "Well-drained loamy",
    tip: "Temperature and timing"
  },
  maize: {
    name: "Maize",
    description: "Maize is a versatile cereal crop used for food, feed and industry. Good drainage and nutrient management matter.",
    soil: "Well-drained loamy",
    tip: "Nutrient management"
  },
  cotton: {
    name: "Cotton",
    description: "Cotton is a fibre crop. Suitable varieties, pest monitoring and appropriate water management are important.",
    soil: "Deep black / loamy",
    tip: "Pest monitoring"
  },
  sugarcane: {
    name: "Sugarcane",
    description: "Sugarcane is a long-duration crop. Soil preparation, water planning and nutrient management are important.",
    soil: "Deep fertile loamy",
    tip: "Long-term water planning"
  },
  groundnut: {
    name: "Groundnut",
    description: "Groundnut is an oilseed and legume crop. Loose, well-drained soil supports pod development.",
    soil: "Sandy loam",
    tip: "Soil drainage"
  },
  tomato: {
    name: "Tomato",
    description: "Tomato is a vegetable crop that needs suitable growing conditions, support where required and regular crop monitoring.",
    soil: "Well-drained loamy",
    tip: "Disease monitoring"
  },
  banana: {
    name: "Banana",
    description: "Banana is a tropical fruit crop. Consistent moisture, suitable drainage and balanced nutrients are important.",
    soil: "Rich, well-drained loamy",
    tip: "Moisture management"
  }
};

const cropSelect = document.getElementById("cropSelect");

cropSelect.addEventListener("change", () => {
  const crop = cropData[cropSelect.value];

  document.getElementById("cropName").textContent = crop.name;
  document.getElementById("cropDescription").textContent = crop.description;
  document.getElementById("cropSoil").textContent = crop.soil;
  document.getElementById("cropTip").textContent = crop.tip;
});

// 3. FARM PROFIT CALCULATOR
document.getElementById("calculateProfit").addEventListener("click", () => {
  const area = Number(document.getElementById("farmArea").value);
  const yieldPerAcre = Number(document.getElementById("yieldPerAcre").value);
  const price = Number(document.getElementById("pricePerKg").value);
  const cost = Number(document.getElementById("farmCost").value);

  const values = [area, yieldPerAcre, price, cost];

  if (values.some(value => !Number.isFinite(value) || value < 0) ||
      values.some(value => value === 0)) {
    alert("Please enter a positive value in all four fields.");
    return;
  }

  const income = area * yieldPerAcre * price;
  const profit = income - cost;

  const formatRupees = value =>
    "₹ " + value.toLocaleString("en-IN", { maximumFractionDigits: 2 });

  document.getElementById("estimatedIncome").textContent =
    formatRupees(income);

  document.getElementById("estimatedProfit").textContent =
    formatRupees(profit);

  document.getElementById("profitMessage").textContent =
    profit >= 0
      ? "Your estimate shows a possible profit."
      : "Your estimate shows a possible loss.";
});

// 4. CROP CARE HELPER
const symptomAdvice = {
  yellow: "Yellowing can have several causes, including nutrient imbalance, excess water, poor drainage or natural leaf ageing. Check soil moisture and inspect affected plants. Ask an agricultural expert before applying fertiliser or treatment.",
  spots: "Leaf spots may be related to fungal, bacterial or other causes. Observe whether the spots spread, check both sides of the leaves and seek local expert identification before using any treatment.",
  wilting: "Wilting may be related to water stress, root problems or disease. Check soil moisture and drainage, and inspect the roots with help from an expert.",
  growth: "Slow growth can be associated with soil conditions, nutrients, water, temperature or pests. Review recent field conditions and consult an agricultural officer for advice.",
  insects: "Different insects affect crops in different ways. Observe the insect and the damage, take a clear photograph if possible and ask a local agricultural expert to identify it before choosing a control method."
};

document.getElementById("checkSymptom").addEventListener("click", () => {
  const symptom = document.getElementById("symptomSelect").value;
  const result = document.getElementById("symptomResult");

  if (!symptom) {
    result.textContent = "Please select a crop symptom first.";
    return;
  }

  result.textContent = symptomAdvice[symptom];
});

// 5. WATER PLANNING GUIDE
document.getElementById("waterAdviceButton").addEventListener("click", () => {
  const soil = document.getElementById("soilType").value;
  const crop = document.getElementById("waterCrop").value;
  const result = document.getElementById("waterResult");

  if (!soil || !crop) {
    result.textContent = "Please select both your soil type and crop.";
    return;
  }

  const soilAdvice = {
    sandy: "Sandy soil generally drains quickly and holds less water. Check soil moisture frequently and consider smaller, appropriately timed irrigation applications.",
    loamy: "Loamy soil often balances drainage and water retention. Monitor moisture at the crop's root zone and adjust irrigation to crop stage.",
    clay: "Clay soil generally retains more water and drains slowly. Avoid overwatering and check field drainage and soil moisture."
  };

  result.textContent = "For " + crop + " in " + soil +
    " soil: " + soilAdvice[soil] +
    " Always consider rainfall, crop stage and local agricultural guidance.";
});

// 6. FOOTER YEAR
const year = new Date().getFullYear();
const footerYear = document.querySelector(".footer > small");

if (footerYear) {
  footerYear.textContent =
    "© " + year + " TERRA GLIDE | Student Innovation Project";
}