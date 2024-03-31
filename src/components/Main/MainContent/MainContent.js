import { WhyDrinkWater } from "../WhyDrinkWater/WhyDrinkWater"
import { WaterConsumptionTracker } from "../WaterConsumptionTracker/WaterConsumptionTracker"

export const MainContent = () => {
    return (
        <div>
            <WaterConsumptionTracker />
            <WhyDrinkWater/>
        </div>
    )
}