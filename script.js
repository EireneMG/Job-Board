const jobsData = {
  "Content Writer": [
    {
      title: "Senior Content Writer",
      location: "London",
      postedTime: "2 days ago",
      tags: ["SEO", "Copywriting", "WordPress"],
      description:
        "Create engaging content for our tech blog, whitepapers, and marketing materials. Strong SEO knowledge required.",
      price: "$45/Hour",
      type: "Full Time",
      image: "assets/contentwriter.jpg",
    },
    {
      title: "Technical Writer",
      location: "San Francisco",
      postedTime: "1 week ago",
      tags: ["Documentation", "API", "Technical"],
      description:
        "Write clear, concise documentation for our software products and APIs. Experience with developer tools required.",
      price: "$60/Hour",
      type: "Full Time",
      image: "assets/technical.jpg",
    },
    {
      title: "Content Marketing Specialist",
      location: "Berlin",
      postedTime: "3 days ago",
      tags: ["Marketing", "Social Media", "Blog"],
      description:
        "Develop and execute content strategy across multiple channels. Experience with social media management required.",
      price: "$4000/Month",
      type: "Full Time",
      image: "assets/marketing.jpg",
    },
  ],
  Finance: [
    {
      title: "Financial Analyst",
      location: "New York",
      postedTime: "1 day ago",
      tags: ["Analysis", "Excel", "Financial Modeling"],
      description:
        "Conduct financial analysis and create detailed reports for senior management. Advanced Excel skills required.",
      price: "$75/Hour",
      type: "Full Time",
      image: "assets/analyst.jpg",
    },
    {
      title: "Investment Banking Associate",
      location: "Hong Kong",
      postedTime: "5 days ago",
      tags: ["Investment", "M&A", "Valuation"],
      description:
        "Support M&A transactions and financial modeling. Experience in investment banking required.",
      price: "$8000/Month",
      type: "Full Time",
      image: "assets/investment.jpg",
    },
    {
      title: "Risk Management Specialist",
      location: "Singapore",
      postedTime: "1 week ago",
      tags: ["Risk", "Compliance", "Banking"],
      description:
        "Develop and implement risk management strategies. Knowledge of banking regulations required.",
      price: "$6500/Month",
      type: "Full Time",
      image: "assets/riskspecialist.jpg",
    },
  ],
  "Human Resource": [
    {
      title: "HR Manager",
      location: "Toronto",
      postedTime: "3 days ago",
      tags: ["Recruitment", "Management", "HR"],
      description:
        "Lead HR operations including recruitment, employee relations, and policy development.",
      price: "$70/Hour",
      type: "Full Time",
      image: "assets/hrmanager.jpg",
    },
    {
      title: "Talent Acquisition Specialist",
      location: "Amsterdam",
      postedTime: "2 days ago",
      tags: ["Recruiting", "Sourcing", "ATS"],
      description:
        "Source and recruit top talent for tech positions. Experience with ATS systems required.",
      price: "$45/Hour",
      type: "Full Time",
      image: "assets/talent.jpg",
    },
    {
      title: "HR Business Partner",
      location: "Sydney",
      postedTime: "4 days ago",
      tags: ["HRBP", "Strategy", "Leadership"],
      description:
        "Partner with business leaders to develop and implement HR strategies aligned with business goals.",
      price: "$7000/Month",
      type: "Full Time",
      image: "assets/hrbusiness.jpg",
    },
  ],
  Management: [
    {
      title: "Project Manager",
      location: "Seattle",
      postedTime: "2 days ago",
      tags: ["Agile", "Scrum", "PMP"],
      description:
        "Lead software development projects using Agile methodologies. PMP certification required.",
      price: "$85/Hour",
      type: "Full Time",
      image: "assets/projectmanager.jpg",
    },
    {
      title: "Operations Manager",
      location: "Chicago",
      postedTime: "1 week ago",
      tags: ["Operations", "Leadership", "Process"],
      description:
        "Oversee daily operations and implement process improvements. Experience in lean management preferred.",
      price: "$7500/Month",
      type: "Full Time",
      image: "assets/operations.jpg",
    },
    {
      title: "Product Manager",
      location: "Austin",
      postedTime: "3 days ago",
      tags: ["Product", "Strategy", "Analytics"],
      description:
        "Drive product strategy and roadmap. Strong analytical and communication skills required.",
      price: "$90/Hour",
      type: "Full Time",
      image: "assets/productmanager.jpg",
    },
  ],
  "Market Research": [
    {
      title: "Market Research Analyst",
      location: "Boston",
      postedTime: "4 days ago",
      tags: ["Analytics", "Research", "Data"],
      description:
        "Conduct market research and analyze consumer behavior patterns. Experience with research tools required.",
      price: "$55/Hour",
      type: "Full Time",
      image: "assets/research.jpg",
    },
    {
      title: "Consumer Insights Manager",
      location: "Melbourne",
      postedTime: "1 week ago",
      tags: ["Insights", "Strategy", "Research"],
      description:
        "Generate actionable insights from consumer research to drive business decisions.",
      price: "$6500/Month",
      type: "Full Time",
      image: "assets/consumer.jpg",
    },
    {
      title: "Data Analytics Specialist",
      location: "Dublin",
      postedTime: "2 days ago",
      tags: ["Analytics", "SQL", "Visualization"],
      description:
        "Analyze market data and create insightful visualizations. SQL and Tableau experience required.",
      price: "$65/Hour",
      type: "Full Time",
      image: "assets/dataanalytics.jpg",
    },
  ],
  "Marketing & Sale": [
    {
      title: "Digital Marketing Manager",
      location: "Vancouver",
      postedTime: "3 days ago",
      tags: ["Digital", "SEM", "Analytics"],
      description:
        "Lead digital marketing campaigns and optimize performance. Experience with Google Analytics required.",
      price: "$6000/Month",
      type: "Full Time",
      image: "assets/digitalmarketing.jpg",
    },
    {
      title: "Sales Development Representative",
      location: "Miami",
      postedTime: "1 day ago",
      tags: ["Sales", "B2B", "CRM"],
      description:
        "Generate and qualify new business leads. Experience with Salesforce preferred.",
      price: "$50/Hour",
      type: "Full Time",
      image: "assets/salesdevelopment.jpg",
    },
    {
      title: "Marketing Automation Specialist",
      location: "Stockholm",
      postedTime: "5 days ago",
      tags: ["Automation", "Email", "CRM"],
      description:
        "Manage marketing automation campaigns. Experience with Marketo or similar tools required.",
      price: "$5500/Month",
      type: "Full Time",
      image: "assets/marketingautomation.jpg",
    },
  ],
  "Retail & Products": [
    {
      title: "Retail Store Manager",
      location: "Los Angeles",
      postedTime: "2 days ago",
      tags: ["Retail", "Management", "Sales"],
      description:
        "Manage store operations and lead sales team. Previous retail management experience required.",
      price: "$5000/Month",
      type: "Full Time",
      image: "assets/retail.jpg",
    },
    {
      title: "Product Designer",
      location: "Paris",
      postedTime: "1 week ago",
      tags: ["Design", "Product", "UX"],
      description:
        "Design innovative retail products. Experience with 3D modeling software required.",
      price: "$70/Hour",
      type: "Full Time",
      image: "assets/productdesigner.jpg",
    },
    {
      title: "Inventory Specialist",
      location: "Milan",
      postedTime: "4 days ago",
      tags: ["Inventory", "Retail", "Operations"],
      description:
        "Manage inventory levels and optimize stock flow. Experience with inventory management systems required.",
      price: "$4000/Month",
      type: "Full Time",
      image: "assets/inventory.jpg",
    },
  ],
  Software: [
    {
      title: "Senior Full Stack Developer",
      location: "Berlin",
      postedTime: "1 day ago",
      tags: ["React", "Node.js", "MongoDB"],
      description:
        "Build scalable web applications using modern technologies. 5+ years of experience required.",
      price: "$95/Hour",
      type: "Full Time",
      image: "assets/softwaredeveloper.jpg",
    },
    {
      title: "Mobile App Developer",
      location: "Tel Aviv",
      postedTime: "3 days ago",
      tags: ["iOS", "Swift", "Mobile"],
      description:
        "Develop native iOS applications. Experience with Swift and iOS frameworks required.",
      price: "$85/Hour",
      type: "Full Time",
      image: "assets/mobileapp.jpg",
    },
    {
      title: "DevOps Engineer",
      location: "Amsterdam",
      postedTime: "2 days ago",
      tags: ["AWS", "Docker", "CI/CD"],
      description:
        "Manage cloud infrastructure and implement CI/CD pipelines. AWS certification preferred.",
      price: "$8500/Month",
      type: "Full Time",
      image: "assets/devops.jpg",
    },
  ],
};

// Function to create a job card HTML
function createJobCard(job) {
  return `
      <div class="col-md-4">
        <div class="job-card">
          <div class="job-image">
            <img src="${job.image}" alt="${job.title}" />
            <span class="job-badge">${job.type}</span>
          </div>
          <div class="job-content">
            <h3 class="job-title">${job.title}</h3>
            <div class="job-meta">
              <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
              <span><i class="far fa-clock"></i> Posted ${job.postedTime}</span>
            </div>
            <div class="job-tags">
              ${job.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-footer">
              <span class="job-price">${job.price}</span>
            </div>
          </div>
        </div>
      </div>
    `;
}

// Function to update jobs grid
function updateJobsGrid(category) {
  const jobsGrid = document.querySelector(".jobs-grid");
  const jobs = jobsData[category] || [];

  // Create HTML for all jobs in the category
  const jobsHTML = jobs.map((job) => createJobCard(job)).join("");

  // Update the grid with new jobs
  jobsGrid.innerHTML = jobsHTML;

  // If no jobs found, show a message
  if (jobs.length === 0) {
    jobsGrid.innerHTML = `
        <div class="col-12 text-center">
          <p class="no-jobs-message">No jobs found for ${category}</p>
        </div>
      `;
  }

  // Update active category pill
  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.classList.remove("active");
    if (pill.dataset.category === category) {
      pill.classList.add("active");
    }
  });
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Add click handlers to category pills
  const categoryPills = document.querySelectorAll(".category-pill");
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = pill.dataset.category;
      updateJobsGrid(category);
    });
  });

  // Show all jobs initially (or you could start with a specific category)
  updateJobsGrid("Content Writer");
});

const jobCategories = {
  "Healthcare and Medicine": [
    "General Practitioner",
    "Surgeon",
    "Pediatrician",
    "Cardiologist",
    "Registered Nurse",
    "Nurse Practitioner",
    "Midwife",
    "Radiologic Technologist",
    "Physical Therapist",
    "Occupational Therapist",
    "Pharmacist",
    "Pharmacy Technician",
    "Psychologist",
    "Psychiatrist",
    "Counselor",
  ],
  Education: [
    "Elementary Teacher",
    "High School Teacher",
    "Special Education Teacher",
    "Professor",
    "Researcher",
    "Academic Advisor",
    "Principal",
    "School Counselor",
    "Curriculum Developer",
    "Private Tutor",
    "Corporate Trainer",
  ],
  "Information Technology": [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Security Analyst",
    "Ethical Hacker",
    "Network Administrator",
    "Systems Engineer",
    "Data Scientist",
    "Database Administrator",
    "Data Analyst",
  ],
  "Business and Finance": [
    "Accountant",
    "Auditor",
    "Tax Consultant",
    "Financial Analyst",
    "Investment Banker",
    "Insurance Agent",
    "Business Consultant",
    "Operations Manager",
    "HR Manager",
    "Sales Executive",
    "Digital Marketer",
    "Brand Manager",
  ],
  Engineering: [
    "Structural Engineer",
    "Geotechnical Engineer",
    "Mechanical Designer",
    "Automotive Engineer",
    "Power Systems Engineer",
    "Electronics Engineer",
    "Software Engineer",
    "Environmental Engineer",
  ],
  "Arts, Design, and Entertainment": [
    "Graphic Designer",
    "Animator",
    "Illustrator",
    "Actor",
    "Dancer",
    "Musician",
    "Author",
    "Screenwriter",
    "Copywriter",
    "Fashion Designer",
    "Textile Designer",
    "Interior Designer",
  ],
  "Skilled Trades": [
    "Mason",
    "Carpenter",
    "Tilesetter",
    "Plumber",
    "Electrician",
    "HVAC Technician",
    "Aircon Cleaner",
    "Elevator Technician",
    "Mechanic",
    "CNC Operator",
    "Welder",
  ],
  "Science and Research": [
    "Biologist",
    "Chemist",
    "Physicist",
    "Lab Technician",
    "Research Scientist",
    "Environmental Consultant",
    "Conservationist",
  ],
  "Legal and Law Enforcement": [
    "Lawyer",
    "Legal Assistant",
    "Paralegal",
    "Police Officer",
    "Detective",
    "Crime Scene Investigator",
    "Prison Officer",
    "Probation Officer",
  ],
  "Hospitality and Tourism": [
    "Chef",
    "Barista",
    "Bartender",
    "Hotel Manager",
    "Concierge",
    "Event Planner",
    "Travel Agent",
    "Tour Guide",
    "Flight Attendant",
  ],
  "Media and Communications": [
    "Reporter",
    "News Anchor",
    "Editor",
    "PR Manager",
    "Communications Specialist",
    "Radio Host",
    "TV Producer",
    "Video Editor",
  ],
  "Agriculture and Environment": [
    "Farmer",
    "Agricultural Technician",
    "Agronomist",
    "Ecologist",
    "Wildlife Biologist",
    "Urban Planner",
  ],
  "Public Service and Non-Profit": [
    "Policy Analyst",
    "Diplomat",
    "Urban Planner",
    "Program Coordinator",
    "Fundraiser",
    "Volunteer Manager",
  ],
  "Transportation and Logistics": [
    "Truck Driver",
    "Delivery Rider",
    "Chauffeur",
    "Supply Chain Manager",
    "Warehouse Supervisor",
    "Inventory Analyst",
    "Pilot",
    "Air Traffic Controller",
    "Aircraft Mechanic",
  ],
  "Retail and Customer Service": [
    "Salesperson",
    "Store Manager",
    "Cashier",
    "Call Center Agent",
    "Help Desk Representative",
  ],
  "Sports and Recreation": [
    "Professional Athlete",
    "Coach",
    "Personal Trainer",
    "Park Ranger",
    "Adventure Guide",
  ],
};

// DOM Elements
const industryInput = document.getElementById("industry-input");
const jobDropdown = document.getElementById("job-dropdown");

// Function to create a job card HTML
function createJobCard(job) {
  return `
    <div class="col-md-4">
      <div class="job-card">
        <div class="job-image">
          <img src="${job.image}" alt="${job.title}" />
          <span class="job-badge">${job.type}</span>
        </div>
        <div class="job-content">
          <h3 class="job-title">${job.title}</h3>
          <div class="job-meta">
            <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
            <span><i class="far fa-clock"></i> Posted ${job.postedTime}</span>
          </div>
          <div class="job-tags">
            ${job.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <p class="job-description">${job.description}</p>
          <div class="job-footer">
            <span class="job-price">${job.price}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to update jobs grid
function updateJobsGrid(category) {
  const jobsGrid = document.querySelector(".jobs-grid");
  if (!jobsGrid) return; // Exit if not on jobs page

  const jobs = jobsData[category] || [];
  const jobsHTML = jobs.map((job) => createJobCard(job)).join("");

  jobsGrid.innerHTML = jobs.length > 0 
    ? jobsHTML 
    : `<div class="col-12 text-center">
         <p class="no-jobs-message">No jobs found for ${category}</p>
       </div>`;

  // Update active category pill
  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.category === category);
  });
}

// Dropdown Functions
function showCategories() {
  jobDropdown.innerHTML = Object.keys(jobCategories)
    .map(category => `
      <div class="dropdown-item category-item">
        <span>${category}</span>
        <i class="fas fa-chevron-right"></i>
      </div>
    `).join("");
  jobDropdown.style.display = "block";
}

function showJobsForCategory(category) {
  const jobs = jobCategories[category];
  jobDropdown.innerHTML = `
    <div class="dropdown-item back-item">
      <i class="fas fa-chevron-left"></i>
      Back to Categories
    </div>
    ${jobs.map(job => `
      <div class="dropdown-item job-item">
        <i class="fas fa-briefcase"></i>
        ${job}
      </div>
    `).join("")}
  `;
}

function filterDropdownItems(filter) {
  if (!filter) {
    showCategories();
    return;
  }

  const filteredCategories = Object.keys(jobCategories)
    .filter(category => category.toLowerCase().includes(filter));
  
  const filteredJobs = Object.values(jobCategories)
    .flat()
    .filter(job => job.toLowerCase().includes(filter));

  jobDropdown.innerHTML = `
    ${filteredCategories.map(category => `
      <div class="dropdown-item category-item">
        <span>${category}</span>
        <i class="fas fa-chevron-right"></i>
      </div>
    `).join("")}
    ${filteredJobs.map(job => `
      <div class="dropdown-item job-item">
        <i class="fas fa-briefcase"></i>
        ${job}
      </div>
    `).join("")}
  `;
  jobDropdown.style.display = "block";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize jobs grid if on jobs page
  const categoryPills = document.querySelectorAll(".category-pill");
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      updateJobsGrid(pill.dataset.category);
    });
  });

  // Show initial jobs if on jobs page
  if (document.querySelector(".jobs-grid")) {
    updateJobsGrid("Content Writer");
  }
});

// Industry input focus event
industryInput.addEventListener("focus", () => {
  showCategories();
});

// Dropdown click events
jobDropdown.addEventListener("click", (event) => {
  const categoryItem = event.target.closest('.category-item');
  const jobItem = event.target.closest('.job-item');
  const backItem = event.target.closest('.back-item');

  if (categoryItem) {
    const selectedCategory = categoryItem.querySelector('span').textContent;
    industryInput.value = selectedCategory;
    showJobsForCategory(selectedCategory);
  } else if (jobItem) {
    industryInput.value = jobItem.textContent.trim();
    jobDropdown.style.display = "none";
  } else if (backItem) {
    showCategories();
  }
});

// Input filter event
industryInput.addEventListener("input", (event) => {
  filterDropdownItems(event.target.value.toLowerCase());
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!industryInput.contains(event.target) && !jobDropdown.contains(event.target)) {
    jobDropdown.style.display = "none";
  }
});