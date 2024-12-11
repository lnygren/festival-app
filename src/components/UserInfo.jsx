export default function UserInfo({userInfo}) {



    return <>
        {userInfo.name}
        <img src={userInfo.picture} alt="logo" className="ml-3 w-[40px] rounded-full"/>
    </>;


}