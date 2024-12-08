function UserLogo({user})
{
    return <img className="avatar" src={`http://127.0.0.1:5000/images/avatar/${user.image}`}/>
}

export default UserLogo;
