type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number;// ПРИДЕТСЯ САМОМУ)
  age: number;
  name: string;
  address: AddressType;
};

type UserListPropsType = {
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
