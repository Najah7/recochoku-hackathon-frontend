import CustomCard from "../components/custom-card";
import Header from "../components/header";

const TimeCapsulesPage = () => {
    return (
        <>
            <Header />
            <div class="grid grid-cols-3 gap-4 mt-12 mx-12">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => <CustomCard key={item} />)}
            </div>
        </>

    );
};

export default TimeCapsulesPage;
