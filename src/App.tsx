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
