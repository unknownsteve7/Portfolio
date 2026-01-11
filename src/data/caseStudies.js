export const caseStudies = [
    {
        id: "ecommerce-analytics",
        title: "E-Commerce Analytics Dashboard",
        client: "Retail Corp",
        category: "Data Analytics",
        description: "A comprehensive real-time dashboard that transforms raw sales data into actionable business intelligence. This system provides deep insights into customer behavior, seasonal trends, and inventory lifecycle management.",
        challenge: "The client was struggling with fragmented data across multiple platforms. Reports were being generated manually in Excel, taking up to 48 hours to compile, which meant decisions were always based on outdated information.",
        solution: "We engineered a robust data pipeline using Python and SQL to aggregate data from web, POS, and CRM systems. This was then visualized in a custom Power BI dashboard with real-time refresh capabilities and predictive alerting.",
        results: [
            "40% improvement in data-driven decision making speed",
            "Eliminated 16 hours of weekly manual reporting work",
            "Identified $2M in potential inventory optimization savings"
        ],
        technologies: ["Power BI", "Python", "SQL", "Azure", "DAX"],
        image: "/Dashboard.png",
        duration: "3 months",
        nextId: "customer-segmentation"
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation System",
        client: "FinTech Startup",
        category: "Machine Learning",
        description: "An advanced ML-driven segmentation engine that categorizes users based on transactional behavior and engagement patterns to drive hyper-personalized marketing campaigns.",
        challenge: "The startup was seeing high churn rates due to generic 'one-size-fits-all' marketing. They needed a way to understand which customers were high-value and which were at risk of leaving before it happened.",
        solution: "Implemented an unsupervised learning model (K-Means Clustering) to identify five distinct user personas. We also built a Random Forest classifier to predict churn probability with 89% accuracy.",
        results: [
            "Increased customer retention by 25% within the first quarter",
            "Improved email campaign click-through rates by 35%",
            "Reduced customer acquisition cost by 20% through targeted lookalike modeling"
        ],
        technologies: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "MLFlow"],
        image: "/VisionixAI.png",
        duration: "2 months",
        nextId: "supply-chain-optimization"
    },
    {
        id: "supply-chain-optimization",
        title: "Supply Chain Optimization",
        client: "Manufacturing Inc",
        category: "Business Intelligence",
        description: "A data-centric approach to global supply chain management, focusing on bottleneck detection and predictive demand forecasting to reduce operational overhead.",
        challenge: "Complex global logistics were causing frequent stockouts on high-demand items while overstocking seasonal goods, leading to significant capital being tied up in non-moving inventory.",
        solution: "Developed a demand forecasting model using Time Series analysis (Prophet). We also implemented a live supply chain monitor that flags potential delays using weather and transit data APIs.",
        results: [
            "30% reduction in average inventory holding costs",
            "Improved on-time delivery rate by 45%",
            "Enhanced forecast accuracy from 65% to 92%"
        ],
        technologies: ["Tableau", "Python", "MySQL", "Statsmodels", "Prophet"],
        image: "/Recommend.png",
        duration: "4 months",
        nextId: "ecommerce-analytics"
    }
];
