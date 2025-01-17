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
const keywordInput = document.getElementById("keywordFilter");

// Function to get all jobs as a flat array
function getAllJobs() {
    let allJobs = [];
    Object.values(jobCategories).forEach(jobs => {
        allJobs = allJobs.concat(jobs);
    });
    return [...new Set(allJobs)]; // Remove duplicates
}

// Function to get query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        industry: params.get('industry') || '',
        keyword: params.get('keyword') || ''
    };
}

// Function to create job card HTML
function createJobCard(job) {
    return `
        <div class="job-card">
            <div class="d-flex flex-column h-100">
                <div class="d-flex align-items-start gap-3 mb-3">
                    <div class="bg-light rounded p-3">
                        <i class="bi bi-building fs-4"></i>
                    </div>
                    <div>
                        <h5 class="job-title mb-1">${job.title}</h5>
                        <div class="company-name">${job.company}</div>
                    </div>
                </div>
                <div class="job-meta mb-3">
                    <span><i class="bi bi-geo-alt"></i>${job.location}</span>
                    <span><i class="bi bi-clock"></i>${job.postedTime}</span>
                    <span><i class="bi bi-briefcase"></i>${job.type}</span>
                </div>
                <div class="job-tags mb-3">
                    ${job.tags.map(tag => `
                        <span class="job-tag">${tag}</span>
                    `).join('')}
                </div>
                <p class="flex-grow-1 mb-3">${job.description}</p>
                <div class="job-footer mt-auto">
                    <div class="job-price">${job.salary}</div>
                    <button class="apply-btn">
                        <i class="bi bi-send me-2"></i>Apply Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to filter and display jobs
function filterJobs() {
    const selectedValue = industryInput.value.trim().toLowerCase();
    const keyword = keywordInput.value.toLowerCase().trim();
    const jobListings = document.getElementById('jobListings');
    const resultCount = document.querySelector('.search-result-count');

    let relevantJobs = [];
    
    // If both fields are empty, show no results
    if (!selectedValue && !keyword) {
        jobListings.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search display-1 text-muted mb-4"></i>
                <h3>Please enter a search term</h3>
                <p class="text-muted">Enter a keyword or select an industry to find jobs.</p>
            </div>
        `;
        if (resultCount) {
            resultCount.textContent = "0 jobs found";
        }
        return;
    }

    // Search through all job listings
    Object.keys(jobListingsData).forEach(mainCategory => {
        const jobTitles = jobListingsData[mainCategory];
        Object.keys(jobTitles).forEach(jobTitle => {
            const jobs = jobTitles[jobTitle];
            jobs.forEach(job => {
                let matchesIndustry = true;
                let matchesKeyword = true;

                // Check industry filter if provided
                if (selectedValue) {
                    matchesIndustry = 
                        job.title.toLowerCase().includes(selectedValue) ||
                        jobTitle.toLowerCase().includes(selectedValue) ||
                        mainCategory.toLowerCase().includes(selectedValue);
                }

                // Check keyword filter if provided
                if (keyword) {
                    matchesKeyword = 
                        job.title.toLowerCase().includes(keyword) ||
                        job.description.toLowerCase().includes(keyword) ||
                        job.company.toLowerCase().includes(keyword) ||
                        job.tags.some(tag => tag.toLowerCase().includes(keyword));
                }

                // Add job if it matches all provided filters
                if (matchesIndustry && matchesKeyword) {
                    relevantJobs.push(job);
                }
            });
        });
    });

    // Remove duplicates
    const uniqueJobs = Array.from(new Set(relevantJobs.map(job => JSON.stringify(job))))
        .map(jobString => JSON.parse(jobString));

    // Update the job listings
    if (uniqueJobs.length > 0) {
        jobListings.innerHTML = uniqueJobs.map(job => createJobCard(job)).join('');
    } else {
        jobListings.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search display-1 text-muted mb-4"></i>
                <h3>No jobs found</h3>
                <p class="text-muted">We couldn't find any jobs matching your search criteria.</p>
            </div>
        `;
    }

    // Update result count
    if (resultCount) {
        resultCount.textContent = `${uniqueJobs.length} jobs found`;
    }
}

// Update the showJobsInDropdown function to include keyword search
function showJobsInDropdown(searchTerm) {
    const allJobs = [];
    
    // Search through all job listings
    Object.keys(jobListingsData).forEach(jobTitle => {
        const jobs = jobListingsData[jobTitle];
        jobs.forEach(job => {
            if (
                job.title.toLowerCase().includes(searchTerm) ||
                job.company.toLowerCase().includes(searchTerm) ||
                job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            ) {
                // Add job title if not already in the list
                if (!allJobs.includes(job.title)) {
                    allJobs.push(job.title);
                }
            }
        });
    });

    // Display results
    if (allJobs.length > 0) {
        jobDropdown.innerHTML = allJobs.map(job => `
            <div class="dropdown-item job-item">
                <i class="bi bi-briefcase"></i>
                <span>${job}</span>
            </div>
        `).join('');
    } else {
        jobDropdown.innerHTML = `
            <div class="dropdown-item">
                <span>No matches found</span>
            </div>
        `;
    }
    jobDropdown.style.display = "block";
}

// Update the initializeDropdown function
function initializeDropdown() {
    if (!industryInput || !jobDropdown) return;

    // Show all jobs when input is focused
    industryInput.addEventListener("focus", () => {
        showJobsInDropdown("");
    });

    // Filter jobs when typing
    industryInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        showJobsInDropdown(searchTerm);
    });

    // Handle keyword input
    if (keywordInput) {
        keywordInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            if (searchTerm.length >= 2) { // Only search if 2 or more characters
                showJobsInDropdown(searchTerm);
                jobDropdown.style.display = "block";
            } else {
                jobDropdown.style.display = "none";
            }
        });

        // Focus on keyword input shows dropdown
        keywordInput.addEventListener("focus", () => {
            if (keywordInput.value.length >= 2) {
                showJobsInDropdown(keywordInput.value.toLowerCase().trim());
            }
        });
    }

    // Handle job selection
    jobDropdown.addEventListener("click", (e) => {
        const jobItem = e.target.closest('.job-item');
        if (jobItem) {
            const jobTitle = jobItem.querySelector('span').textContent.trim();
            // Determine which input triggered the dropdown
            const activeInput = document.activeElement === keywordInput ? keywordInput : industryInput;
            activeInput.value = jobTitle;
            jobDropdown.style.display = "none";
            filterJobs(); // Update results immediately
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!industryInput.contains(e.target) && 
            !jobDropdown.contains(e.target) && 
            !keywordInput.contains(e.target)) {
            jobDropdown.style.display = "none";
        }
    });
}

function initializeViewToggle() {
    const jobListings = document.getElementById('jobListings');
    const listViewBtn = document.querySelector('.list-view');
    const gridViewBtn = document.querySelector('.grid-view');

    if (!jobListings || !listViewBtn || !gridViewBtn) return;

    // List view click handler
    listViewBtn.addEventListener('click', () => {
        jobListings.classList.remove('grid-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        localStorage.setItem('viewPreference', 'list');
    });

    // Grid view click handler
    gridViewBtn.addEventListener('click', () => {
        jobListings.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        localStorage.setItem('viewPreference', 'grid');
    });

    // Load saved preference
    const savedView = localStorage.getItem('viewPreference');
    if (savedView === 'grid') {
        jobListings.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    }
}

// Job Listings Data
const jobListingsData = {
    "Healthcare and Medicine": {
        "General Practitioner": [
            {
                title: "Family Medicine Physician",
                company: "HealthCare Plus",
                location: "Boston, MA",
                postedTime: "2 days ago",
                tags: ["Family Medicine", "Primary Care", "Internal Medicine"],
                description: "Seeking an experienced GP to provide comprehensive primary care services to patients of all ages.",
                salary: "$220,000 - $280,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Primary Care Doctor",
                company: "City Medical Group",
                location: "Chicago, IL",
                postedTime: "1 week ago",
                tags: ["Primary Care", "Preventive Medicine", "Family Health"],
                description: "Join our growing practice providing quality primary care to diverse patient population.",
                salary: "$200,000 - $260,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "General Physician",
                company: "Community Health Center",
                location: "Seattle, WA",
                postedTime: "3 days ago",
                tags: ["General Medicine", "Community Health", "Patient Care"],
                description: "Looking for a dedicated physician to serve in our community health center.",
                salary: "$190,000 - $240,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Surgeon": [
            {
                title: "General Surgeon",
                company: "Metropolitan Hospital",
                location: "New York, NY",
                postedTime: "5 days ago",
                tags: ["Surgery", "Trauma Care", "Minimally Invasive"],
                description: "Experienced surgeon needed for busy metropolitan hospital.",
                salary: "$350,000 - $450,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Cardiac Surgeon",
                company: "Heart Institute",
                location: "Houston, TX",
                postedTime: "1 week ago",
                tags: ["Cardiac Surgery", "Cardiovascular", "Thoracic"],
                description: "Seeking experienced cardiac surgeon for leading heart institute.",
                salary: "$400,000 - $600,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Neurosurgeon",
                company: "Brain & Spine Center",
                location: "Los Angeles, CA",
                postedTime: "3 days ago",
                tags: ["Neurosurgery", "Brain Surgery", "Spine Surgery"],
                description: "Join our team of leading neurosurgeons in providing exceptional care.",
                salary: "$500,000 - $700,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Pediatrician": [
            {
                title: "Pediatrician",
                company: "Kids Health Clinic",
                location: "Miami, FL",
                postedTime: "4 days ago",
                tags: ["Pediatrics", "Child Health", "Family Care"],
                description: "Provide comprehensive healthcare to children from infancy through adolescence.",
                salary: "$180,000 - $230,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Pediatric Nurse Practitioner",
                company: "Children's Hospital",
                location: "San Diego, CA",
                postedTime: "1 week ago",
                tags: ["Pediatrics", "Nursing", "Child Care"],
                description: "Join our pediatric team to provide care and support to young patients.",
                salary: "$120,000 - $160,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    },
    "Education": {
        "Elementary Teacher": [
            {
                title: "Elementary School Teacher",
                company: "Sunshine Elementary",
                location: "Denver, CO",
                postedTime: "3 days ago",
                tags: ["Elementary Education", "Curriculum Development", "Student Assessment"],
                description: "Seeking passionate elementary teacher for grades 3-5.",
                salary: "$45,000 - $60,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Primary Grade Teacher",
                company: "Learning Academy",
                location: "Phoenix, AZ",
                postedTime: "1 week ago",
                tags: ["Primary Education", "Classroom Management", "Early Childhood"],
                description: "Join our team teaching grades K-2 in a supportive environment.",
                salary: "$42,000 - $55,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "STEM Elementary Teacher",
                company: "Innovation Elementary",
                location: "Seattle, WA",
                postedTime: "4 days ago",
                tags: ["STEM Education", "Project-Based Learning", "Technology Integration"],
                description: "Teach STEM subjects to elementary students using innovative methods.",
                salary: "$48,000 - $63,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Professor": [
            {
                title: "Computer Science Professor",
                company: "Tech University",
                location: "Boston, MA",
                postedTime: "1 week ago",
                tags: ["Computer Science", "Research", "Teaching", "PhD Required"],
                description: "Teach undergraduate and graduate courses in computer science while conducting research.",
                salary: "$90,000 - $120,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Business Professor",
                company: "Business School",
                location: "Chicago, IL",
                postedTime: "3 days ago",
                tags: ["Business Administration", "MBA", "Research", "Teaching"],
                description: "Seeking professor for undergraduate and MBA business courses.",
                salary: "$85,000 - $115,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Engineering Professor",
                company: "State University",
                location: "Austin, TX",
                postedTime: "5 days ago",
                tags: ["Engineering", "Research", "Graduate Studies", "Lab Supervision"],
                description: "Lead engineering courses and research projects at graduate level.",
                salary: "$95,000 - $125,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "High School Teacher": [
            {
                title: "High School Math Teacher",
                company: "City High School",
                location: "Los Angeles, CA",
                postedTime: "2 days ago",
                tags: ["Mathematics", "Education", "Teaching"],
                description: "Teach high school mathematics and prepare students for college.",
                salary: "$50,000 - $70,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "High School Science Teacher",
                company: "Green Valley High",
                location: "San Francisco, CA",
                postedTime: "1 week ago",
                tags: ["Science", "Education", "Teaching"],
                description: "Instruct students in various science subjects and lab work.",
                salary: "$52,000 - $72,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    },
    "Information Technology": {
        "Software Engineer": [
            {
                title: "Senior Software Engineer",
                company: "Tech Innovations Inc",
                location: "San Francisco, CA",
                postedTime: "2 days ago",
                tags: ["JavaScript", "React", "Node.js", "AWS"],
                description: "Join our team building next-generation cloud applications.",
                salary: "$140,000 - $180,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Full Stack Developer",
                company: "Digital Solutions",
                location: "Austin, TX",
                postedTime: "1 week ago",
                tags: ["Python", "Django", "React", "PostgreSQL"],
                description: "Looking for a full stack developer to work on our enterprise applications.",
                salary: "$120,000 - $150,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Backend Engineer",
                company: "StartUp Now",
                location: "New York, NY",
                postedTime: "4 days ago",
                tags: ["Java", "Spring Boot", "Microservices", "Docker"],
                description: "Seeking experienced backend engineer to develop scalable services.",
                salary: "$130,000 - $160,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Data Analyst": [
            {
                title: "Senior Data Analyst",
                company: "Analytics Pro",
                location: "San Francisco, CA",
                postedTime: "3 days ago",
                tags: ["SQL", "Python", "Tableau", "Data Visualization"],
                description: "Looking for an experienced data analyst to drive business insights through data analysis.",
                salary: "$90,000 - $120,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Business Intelligence Analyst",
                company: "Tech Solutions Inc",
                location: "Seattle, WA",
                postedTime: "1 week ago",
                tags: ["Power BI", "SQL", "Excel", "Data Modeling"],
                description: "Join our BI team to transform business data into actionable insights.",
                salary: "$85,000 - $110,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Marketing Data Analyst",
                company: "Digital Marketing Agency",
                location: "New York, NY",
                postedTime: "2 days ago",
                tags: ["Google Analytics", "SQL", "R", "Marketing Analytics"],
                description: "Analyze marketing campaign performance and customer behavior data.",
                salary: "$80,000 - $100,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Web Developer": [
            {
                title: "Front-End Developer",
                company: "Creative Web Solutions",
                location: "Los Angeles, CA",
                postedTime: "3 days ago",
                tags: ["HTML", "CSS", "JavaScript", "React"],
                description: "Develop user-friendly web applications and interfaces.",
                salary: "$90,000 - $120,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Back-End Developer",
                company: "Innovative Tech",
                location: "Chicago, IL",
                postedTime: "1 week ago",
                tags: ["Node.js", "Express", "MongoDB"],
                description: "Build and maintain server-side applications and databases.",
                salary: "$95,000 - $125,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    },
    "Transportation and Logistics": {
        "Truck Driver": [
            {
                title: "Long Haul Truck Driver",
                company: "National Freight Co.",
                location: "Dallas, TX",
                postedTime: "2 days ago",
                tags: ["Truck Driving", "Logistics", "Transportation"],
                description: "Transport goods across long distances while ensuring timely delivery.",
                salary: "$60,000 - $80,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Local Delivery Driver",
                company: "Quick Delivery Services",
                location: "San Diego, CA",
                postedTime: "1 week ago",
                tags: ["Delivery", "Logistics", "Transportation"],
                description: "Deliver packages to local customers in a timely manner.",
                salary: "$40,000 - $55,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Supply Chain Manager": [
            {
                title: "Supply Chain Manager",
                company: "Global Logistics Inc.",
                location: "New York, NY",
                postedTime: "3 days ago",
                tags: ["Supply Chain", "Logistics", "Management"],
                description: "Oversee and manage supply chain operations to optimize efficiency.",
                salary: "$90,000 - $120,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Logistics Coordinator",
                company: "Fast Track Logistics",
                location: "Chicago, IL",
                postedTime: "1 week ago",
                tags: ["Logistics", "Coordination", "Supply Chain"],
                description: "Coordinate logistics and supply chain activities to ensure smooth operations.",
                salary: "$60,000 - $80,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Warehouse Supervisor": [
            {
                title: "Warehouse Supervisor",
                company: "Warehouse Solutions",
                location: "Los Angeles, CA",
                postedTime: "4 days ago",
                tags: ["Warehouse", "Management", "Logistics"],
                description: "Supervise warehouse operations and manage staff.",
                salary: "$70,000 - $90,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Inventory Analyst",
                company: "Retail Logistics",
                location: "San Francisco, CA",
                postedTime: "1 week ago",
                tags: ["Inventory", "Analysis", "Logistics"],
                description: "Analyze inventory levels and optimize stock management.",
                salary: "$55,000 - $75,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    },
    "Retail and Customer Service": {
        "Salesperson": [
            {
                title: "Retail Sales Associate",
                company: "Fashion Retailer",
                location: "New York, NY",
                postedTime: "2 days ago",
                tags: ["Sales", "Customer Service", "Retail"],
                description: "Assist customers in finding products and provide excellent service.",
                salary: "$30,000 - $40,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Electronics Sales Specialist",
                company: "Tech Store",
                location: "Los Angeles, CA",
                postedTime: "1 week ago",
                tags: ["Sales", "Electronics", "Customer Service"],
                description: "Provide expert advice on electronics and assist customers with purchases.",
                salary: "$35,000 - $45,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Store Manager": [
            {
                title: "Store Manager",
                company: "Grocery Chain",
                location: "Chicago, IL",
                postedTime: "3 days ago",
                tags: ["Management", "Retail", "Customer Service"],
                description: "Oversee daily operations of the store and manage staff.",
                salary: "$50,000 - $70,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Assistant Store Manager",
                company: "Clothing Retailer",
                location: "San Francisco, CA",
                postedTime: "1 week ago",
                tags: ["Management", "Retail", "Customer Service"],
                description: "Assist the store manager in daily operations and staff management.",
                salary: "$40,000 - $55,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Cashier": [
            {
                title: "Cashier",
                company: "Supermarket",
                location: "Miami, FL",
                postedTime: "2 days ago",
                tags: ["Cashier", "Customer Service", "Retail"],
                description: "Handle customer transactions and provide excellent service.",
                salary: "$25,000 - $35,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Self-Checkout Attendant",
                company: "Retail Store",
                location: "Dallas, TX",
                postedTime: "1 week ago",
                tags: ["Cashier", "Customer Service", "Retail"],
                description: "Assist customers at self-checkout stations and ensure smooth operations.",
                salary: "$24,000 - $34,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    },
    "Sports and Recreation": {
        "Professional Athlete": [
            {
                title: "Professional Soccer Player",
                company: "Major League Soccer Team",
                location: "Los Angeles, CA",
                postedTime: "2 days ago",
                tags: ["Athletics", "Team Sports", "Professional"],
                description: "Compete at the highest level in professional soccer.",
                salary: "$1,000,000 - $3,000,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Professional Basketball Player",
                company: "NBA Team",
                location: "New York, NY",
                postedTime: "1 week ago",
                tags: ["Athletics", "Team Sports", "Professional"],
                description: "Compete at the highest level in professional basketball.",
                salary: "$1,500,000 - $5,000,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Coach": [
            {
                title: "Head Coach",
                company: "High School Football Team",
                location: "Dallas, TX",
                postedTime: "3 days ago",
                tags: ["Coaching", "Sports", "Leadership"],
                description: "Lead and develop the high school football team.",
                salary: "$60,000 - $80,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Assistant Coach",
                company: "College Basketball Team",
                location: "Chicago, IL",
                postedTime: "1 week ago",
                tags: ["Coaching", "Sports", "Team Development"],
                description: "Assist the head coach in training and developing the basketball team.",
                salary: "$40,000 - $60,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Personal Trainer": [
            {
                title: "Certified Personal Trainer",
                company: "Fitness Center",
                location: "San Francisco, CA",
                postedTime: "2 days ago",
                tags: ["Fitness", "Training", "Health"],
                description: "Provide personalized training programs and support to clients.",
                salary: "$50,000 - $70,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Group Fitness Instructor",
                company: "Health Club",
                location: "Miami, FL",
                postedTime: "1 week ago",
                tags: ["Fitness", "Group Classes", "Health"],
                description: "Lead group fitness classes and motivate participants.",
                salary: "$35,000 - $50,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ],
        "Park Ranger": [
            {
                title: "Park Ranger",
                company: "National Park Service",
                location: "Yosemite National Park, CA",
                postedTime: "3 days ago",
                tags: ["Conservation", "Outdoor", "Public Service"],
                description: "Protect and preserve park resources while providing visitor services.",
                salary: "$40,000 - $55,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            },
            {
                title: "Wildlife Conservation Officer",
                company: "State Wildlife Agency",
                location: "Denver, CO",
                postedTime: "1 week ago",
                tags: ["Wildlife", "Conservation", "Public Service"],
                description: "Enforce wildlife laws and protect natural resources.",
                salary: "$45,000 - $60,000/year",
                type: "Full Time",
                logo: "https://placeholder.com/150"
            }
        ]
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize from URL parameters
    const { industry, keyword } = getQueryParams();
    
    if (industryInput) {
        industryInput.value = industry;
    }
    
    if (keywordInput) {
        keywordInput.value = keyword;
    }

    // Initialize dropdown
    initializeDropdown();
    initializeViewToggle();

    // Handle search form submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            filterJobs();
        });
    }

    // Handle keyword input
    if (keywordInput) {
        keywordInput.addEventListener('input', () => {
            if (keywordInput.value.trim().length > 0) {
                filterJobs();
            }
        });
    }

    // Only run initial filter if there are search parameters
    if (industry || keyword) {
        filterJobs();
    }
});

// Add necessary CSS
const style = document.createElement('style');
style.textContent = `
    #job-dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
    }

    .dropdown-item {
        padding: 12px 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .dropdown-item:hover {
        background-color: #f8f9fa;
    }

    .dropdown-item i {
        color: #6c757d;
    }

    .job-card {
        transition: transform 0.2s;
    }

    .job-card:hover {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);