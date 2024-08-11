import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const opera = [
    {
        "companyName": "Tech Innovations Inc.",
        "typeOfServices": "Software Development",
        "location": "New York, NY",
        "established": 2010,
        "employees": 150,
        "website": "www.techinnovations.com",
        "industry": "Technology"
    },
    {
        "companyName": "Green Energy Solutions",
        "typeOfServices": "Renewable Energy Consulting",
        "location": "San Francisco, CA",
        "established": 2015,
        "employees": 80,
        "website": "www.greenenergysolutions.com",
        "industry": "Energy"
    },
    {
        "companyName": "HealthFirst Medical",
        "typeOfServices": "Healthcare Services",
        "location": "Chicago, IL",
        "established": 2005,
        "employees": 200,
        "website": "www.healthfirstmedical.com",
        "industry": "Healthcare"
    },
    {
        "companyName": "FinTech Innovations",
        "typeOfServices": "Financial Technology Solutions",
        "location": "Austin, TX",
        "established": 2018,
        "employees": 120,
        "website": "www.fintechinnovations.com",
        "industry": "Finance"
    },
    {
        "companyName": "Design Studio Co.",
        "typeOfServices": "Graphic Design",
        "location": "Los Angeles, CA",
        "established": 2012,
        "employees": 50,
        "website": "www.designstudioco.com",
        "industry": "Design"
    },
    {
        "companyName": "EduTech Learning",
        "typeOfServices": "E-Learning Platforms",
        "location": "Seattle, WA",
        "established": 2020,
        "employees": 30,
        "website": "www.edutechlearning.com",
        "industry": "Education"
    },
    {
        "companyName": "Logistics Masters",
        "typeOfServices": "Supply Chain Management",
        "location": "Miami, FL",
        "established": 2010,
        "employees": 250,
        "website": "www.logisticsmasters.com",
        "industry": "Logistics"
    },
    {
        "companyName": "Creative Marketing Agency",
        "typeOfServices": "Digital Marketing",
        "location": "Boston, MA",
        "established": 2016,
        "employees": 75,
        "website": "www.creativemarketingagency.com",
        "industry": "Marketing"
    },
    {
        "companyName": "Cybersecurity Experts",
        "typeOfServices": "Cybersecurity Solutions",
        "location": "Washington, D.C.",
        "established": 2017,
        "employees": 100,
        "website": "www.cybersecurityexperts.com",
        "industry": "Security"
    },
    {
        "companyName": "Eco-Friendly Products",
        "typeOfServices": "Sustainable Goods",
        "location": "Portland, OR",
        "established": 2019,
        "employees": 40,
        "website": "www.ecofriendlyproducts.com",
        "industry": "Retail"
    },
    {
        "companyName": "Travel Solutions Group",
        "typeOfServices": "Travel Agency",
        "location": "Las Vegas, NV",
        "established": 2008,
        "employees": 60,
        "website": "www.travelsolutionsgroup.com",
        "industry": "Travel"
    },
    {
        "companyName": "Smart Home Tech",
        "typeOfServices": "Home Automation",
        "location": "Denver, CO",
        "established": 2014,
        "employees": 90,
        "website": "www.smarthometech.com",
        "industry": "Technology"
    },
    {
        "companyName": "Fashion Forward",
        "typeOfServices": "Clothing Retail",
        "location": "New York, NY",
        "established": 2011,
        "employees": 110,
        "website": "www.fashionforward.com",
        "industry": "Fashion"
    },
    {
        "companyName": "Pet Care Services",
        "typeOfServices": "Pet Grooming and Boarding",
        "location": "San Diego, CA",
        "established": 2013,
        "employees": 35,
        "website": "www.petcareservices.com",
        "industry": "Pet Services"
    },
    {
        "companyName": "Construction Pros",
        "typeOfServices": "Construction and Renovation",
        "location": "Phoenix, AZ",
        "established": 2006,
        "employees": 300,
        "website": "www.constructionpros.com",
        "industry": "Construction"
    },
    {
        "companyName": "Culinary Delights",
        "typeOfServices": "Catering Services",
        "location": "Houston, TX",
        "established": 2010,
        "employees": 50,
        "website": "www.culinarydelights.com",
        "industry": "Food & Beverage"
    },
    {
        "companyName": "Data Analytics Inc.",
        "typeOfServices": "Data Analysis Services",
        "location": "Atlanta, GA",
        "established": 2019,
        "employees": 70,
        "website": "www.dataanalyticsinc.com",
        "industry": "Analytics"
    },
    {
        "companyName": "Real Estate Solutions",
        "typeOfServices": "Real Estate Brokerage",
        "location": "Orlando, FL",
        "established": 2007,
        "employees": 90,
        "website": "www.realestatesolutions.com",
        "industry": "Real Estate"
    },
    {
        "companyName": "Event Management Co.",
        "typeOfServices": "Event Planning",
        "location": "Nashville, TN",
        "established": 2014,
        "employees": 40,
        "website": "www.eventmanagementco.com",
        "industry": "Events"
    },
    {
        "companyName": "Fitness Hub",
        "typeOfServices": "Gym and Wellness",
        "location": "Philadelphia, PA",
        "established": 2018,
        "employees": 60,
        "website": "www.fitnesshub.com",
        "industry": "Health & Fitness"
    },
    {
        "companyName": "Luxury Car Rentals",
        "typeOfServices": "Car Rental Services",
        "location": "Los Angeles, CA",
        "established": 2012,
        "employees": 25,
        "website": "www.luxurycarrentals.com",
        "industry": "Transportation"
    },
    {
        "companyName": "Home Improvement Experts",
        "typeOfServices": "Home Renovation",
        "location": "Dallas, TX",
        "established": 2010,
        "employees": 80,
        "website": "www.homeimprovementexperts.com",
        "industry": "Construction"
    },
    {
        "companyName": "Digital Solutions Co.",
        "typeOfServices": "Web Development",
        "location": "San Jose, CA",
        "established": 2016,
        "employees": 55,
        "website": "www.digitalsolutionsco.com",
        "industry": "Technology"
    },
    {
        "companyName": "Mobile App Creators",
        "typeOfServices": "Mobile Application Development",
        "location": "Boston, MA",
        "established": 2018,
        "employees": 45,
        "website": "www.mobileappcreators.com",
        "industry": "Technology"
    },
    {
        "companyName": "Cloud Services Group",
        "typeOfServices": "Cloud Computing Solutions",
        "location": "Seattle, WA",
        "established": 2019,
        "employees": 70,
        "website": "www.cloudservicesgroup.com",
        "industry": "Technology"
    },
    {
        "companyName": "Beauty Spa & Wellness",
        "typeOfServices": "Spa and Wellness",
        "location": "Miami, FL",
        "established": 2015,
        "employees": 30,
        "website": "www.beautyspawellness.com",
        "industry": "Health & Beauty"
    },
    {
        "companyName": "Online Retail Hub",
        "typeOfServices": "E-commerce Solutions",
        "location": "New York, NY",
        "established": 2017,
        "employees": 100,
        "website": "www.onlineretailhub.com",
        "industry": "Retail"
    },
    {
        "companyName": "Social Media Agency",
        "typeOfServices": "Social Media Management",
        "location": "Chicago, IL",
        "established": 2014,
        "employees": 40,
        "website": "www.socialmediaagency.com",
        "industry": "Marketing"
    },
    {
        "companyName": "Virtual Assistant Services",
        "typeOfServices": "Administrative Support",
        "location": "Austin, TX",
        "established": 2019,
        "employees": 20,
        "website": "www.virtualassistantservices.com",
        "industry": "Business Services"
    },
    {
        "companyName": "Photography Studio",
        "typeOfServices": "Photography Services",
        "location": "San Francisco, CA",
        "established": 2016,
        "employees": 15,
        "website": "www.photographystudio.com",
        "industry": "Photography"
    },
    {
        "companyName": "Interior Design Co.",
        "typeOfServices": "Interior Design Services",
        "location": "Los Angeles, CA",
        "established": 2018,
        "employees": 35,
        "website": "www.interiordesignco.com",
        "industry": "Design"
    },
    {
        "companyName": "Legal Advisors Group",
        "typeOfServices": "Legal Consulting",
        "location": "New York, NY",
        "established": 2010,
        "employees": 60,
        "website": "www.legaladvisorsgroup.com",
        "industry": "Legal"
    },
    {
        "companyName": "Construction Safety Experts",
        "typeOfServices": "Safety Consulting",
        "location": "Chicago, IL",
        "established": 2015,
        "employees": 25,
        "website": "www.constructionsafetyexperts.com",
        "industry": "Consulting"
    },
    {
        "companyName": "Digital Marketing Pros",
        "typeOfServices": "SEO and SEM Services",
        "location": "Austin, TX",
        "established": 2018,
        "employees": 50,
        "website": "www.digitalmarketingpros.com",
        "industry": "Marketing"
    },
    {
        "companyName": "Blockchain Solutions",
        "typeOfServices": "Blockchain Development",
        "location": "San Francisco, CA",
        "established": 2019,
        "employees": 70,
        "website": "www.blockchainsolutions.com",
        "industry": "Technology"
    }
];

export interface OperInterface {
    companyName: string;
        typeOfServices: string;
        location: string;
        established: number;
        employees: number;
        website: string;
        industry:string;
}

@Injectable({
    providedIn: 'root'
})
export class OperatorService {
    
  constructor(
    private http : HttpClient
  ) {}

  async getOperateurs(): Promise<OperInterface[]> {
    const results:OperInterface[] = await new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve(opera) , 2000 )
    })
    return results;
  }

  async getOperateur(text: string) : Promise<any> {
    const data: (OperInterface | any) = opera.find( user => user.companyName === text );
    return data[0] ?? undefined ;
  };
} 