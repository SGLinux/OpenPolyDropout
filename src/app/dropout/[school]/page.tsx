const Page = async (params: {params: {school: string } }) => {
    return <p>Current pathname: {params.params.school}</p>
}

export default Page