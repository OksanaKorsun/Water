import { WhyDrinkWater } from "../WhyDrinkWater/WhyDrinkWater"
import { WaterConsumptionTracker } from "../WaterConsumptionTracker/WaterConsumptionTracker"
import { Container } from "./MainContent.styled"

export const MainContent = () => {
    return (
        <Container>
            <WaterConsumptionTracker />
            <WhyDrinkWater/>
        </Container>
    )
}