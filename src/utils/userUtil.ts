export interface ILoggedInUser {
    userName: string;
    dob: Date;
    img: string;
    isPremium: boolean;
}

export const defaultLoggedInUser: ILoggedInUser = {
    userName: '',
    dob: new Date("1970-01-01"),
    img: '',
    isPremium: false,
}

export interface IBackendUser extends ILoggedInUser {
    password: string;
}

export const defaultBackendUser: IBackendUser = {
    password: '',
    userName: '',
    img: '',
    dob: new Date('1970-01-01'),
    isPremium: false
}

//usereket nem tárolunk frontend-en
export const allUsers: IBackendUser[] = [
    {
        userName: 'pista100',
        dob: new Date('2005-05-20'),
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/885a6dec-35b8-456f-a409-43b214729c22/d94pvwm-1bca71b9-3f7b-4b00-85e6-69219a0a2a63.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4NWE2ZGVjLTM1YjgtNDU2Zi1hNDA5LTQzYjIxNDcyOWMyMlwvZDk0cHZ3bS0xYmNhNzFiOS0zZjdiLTRiMDAtODVlNi02OTIxOWEwYTJhNjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OEpseESWl9mb4G0An9ncmnehG2_KUkhpUNyfEU4m6p8",
        isPremium: false,
        password: "kiskutya"
    },
    {
        userName: 'ilona500',
        dob: new Date('2002-12-20'),
        img: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fg1tmt6efydp01.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Da3278a0b965a6483d82cf0b7dedd9ff53cafafac&rdt=62360",
        isPremium: true,
        password: "nagykutya"
    },
]

//------------------

export interface ILoginFormUser {
    username: string;
    password: string;
}

export const defaultLoginFormUser: ILoginFormUser = {
    username: '',
    password: ''
}