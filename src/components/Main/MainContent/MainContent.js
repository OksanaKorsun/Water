import { Benefits } from "../Benefits/Benefits"
import { WaterTracker } from "../WaterTracker/WaterTraker"

export const MainContent = () => {
    return (
        <div>
            <WaterTracker />
            <Benefits/>
        </div>
    )
}