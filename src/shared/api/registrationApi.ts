const get = (key: string) => {
    const value = localStorage.getItem(key)
        
    return value ? JSON.parse(value) : null
}

const registrationApi = {
    getItem: (key: string) => {
        return get(key)
    },

    add: <T extends object,>(data: T, key: string) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export default registrationApi;