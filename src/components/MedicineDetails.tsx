import { Medicine } from "../App";
interface MedicineDetailsProps {
  medicine: Medicine;
  onBack: () => void;
}

function MedicineDetails({
  medicine,
  onBack,
}: MedicineDetailsProps) {

  return (

    <div>
      <button onClick={onBack}>
        Back to Results
      </button>

      <h1>
        {medicine.openfda?.brand_name?.[0]}
      </h1>

      <p>
        Generic Name: {medicine.openfda?.generic_name?.[0]}
      </p>


      <p>
        Manufacturer: {medicine.openfda?.manufacturer_name?.[0]}
      </p>

      <p>
        Purpose: {medicine.purpose?.[0]}
      </p>


      <p>
        Uses: {medicine.indications_and_usage?.[0]}
      </p>

      <p>
        Active Ingredient: {medicine.active_ingredient?.[0]}
      </p>

      <p>
        Warnings: {medicine.warnings?.[0]}
      </p>

      <p>
        Dosage: {medicine.dosage_and_administration?.[0]}
      </p>

    </div>
  );
}


export default MedicineDetails;