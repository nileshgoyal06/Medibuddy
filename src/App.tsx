import { useState } from "react";

export interface Medicine{
  id:string;
  
  openfda?:{
    brand_name?:string[];
    generic_name?:string[];
    manufacturer_name?:string[];
  };

  purpose?: string[];
  indications_and_usage?:string[];
  active_ingredient?:string[];
  warnings?:string[];
  dosage_and_administration?:string[];
}

const [search,setSearch] = useState<string>("");
const [medicines,setMedicines] = useState<Medicine[]>([]);
const [selectedMedicine,setSelectedMedicine] = useState<Medicine | null>(null);
const[loading,setLoading] = useState<boolean>(false);
const[error,setError]=useState<string>("");

// Trigger when user click on search button calls a API
const handleSearch = async(): Promise<void> =>{
    
  // Base case- user directly click on search button without searching anything
    if(!search.trim()){
      setError("Please enter medicine name");
      return;
    }

    try{
      setLoading(true);
      setError("");
      setSelectedMedicine(null);

      const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22${search.trim()}%22&limit=20`;

      const response = await fetch(url);

      if(!response.ok){
        throw new Error("Failed to fetch medicines");
      }

      const data :{results?:Medicine[]}=await response.json();

      console.log("Medicines:",data.results);

      setMedicines(data.results || []);

    } catch(error){
      const message = error instanceof Error ? error.message : "Something went wrong";
      console.log("Error",error);
      setError(message);
      setMedicines([]);

    } finally{
      setLoading(false);
    }
};


const handleMedicineClick =(medicine:Medicine):void =>{
  console.log("Selected medicine:",medicine);
  setSelectedMedicine(medicine);
}




