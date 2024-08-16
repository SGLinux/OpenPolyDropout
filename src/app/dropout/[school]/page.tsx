import NYPWithdrawalForm from "@/components/NYPForm";
import TPWithdrawalForm from "@/components/TPForm";
const Page = async (params: {params: {school: string } }) => {
    const currentPath = params.params.school.toLowerCase();
    switch (currentPath) {
        case 'nyp':
            return <NYPWithdrawalForm/>
        case 'tp':
            return <TPWithdrawalForm/>
        default:
            return <NYPWithdrawalForm/>
    }
    // return <p>Current pathname: {params.params.school}</p>
}

export default Page