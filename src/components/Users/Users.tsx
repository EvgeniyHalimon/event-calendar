import { IUsers } from "@/types/types"
import { getDataFromBackend } from "@/utils/getDataFromBackend"
import { useEffect, useState } from "react"
import styles from '../Users/Users.module.scss'
import UserInfo from "./UserInfo"
import AddNewUserModal from "./AddNewUserModal"

const UsersList = () => {

    const [users, setUsers] = useState([])

    const getUsersData = async() => {
        const usersData = await getDataFromBackend('users')
        setUsers(usersData.data)
    }

    useEffect(() => {
        getUsersData()
    },[users.length])

    return (
      <div className={styles.userBlock}>
        <AddNewUserModal users={users} setUsers={setUsers}/>
        {users.map((user: IUsers) =>
            <UserInfo key={user.id} user={user} users={users} setUsers={setUsers} />
        )}
      </div>
    )
}

export default UsersList