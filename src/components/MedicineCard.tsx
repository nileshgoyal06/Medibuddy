import type {Medicine} from "../App";
interface MedicineCardProps {
  medicine: Medicine;
  onClick: () => void;
}

function MedicineCard({
  medicine,
  onClick,
}: MedicineCardProps) {

  return (
    <div className="medicine-card" onClick={onClick}>
      <h2>
        {medicine.openfda?.brand_name?.[0]}
      </h2>
      <p>
        Generic Name: {medicine.openfda?.generic_name?.[0]}
      </p>
      <p>
        Manufacturer: {medicine.openfda?.manufacturer_name?.[0]}
      </p>

    </div>
  );
}

export default MedicineCard;