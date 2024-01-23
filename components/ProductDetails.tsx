import { policies } from "@/data/data";

export default function ProductDetails() {
    return(
        <div className="prose-sm prose mt-4 text-gray-500">
        <ul role="list">
          {policies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
}