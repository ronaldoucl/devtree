export type User = {
    handle: string
    name: string
    email: string
    password: string
}

export type RegisterForm = Pick<User, 'name' | 'email' | 'handle'> & {
    password_confirmation: string
    password: string
}