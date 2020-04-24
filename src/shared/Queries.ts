import gql from "graphql-tag";

export const GetUser = gql`
    query getUser($id: Long!) {
        getUser(id: $id) {
            id
            name
        }
    }
`

export const GetTasks = gql`
    query getTasks {
        getTasks {
            id
            title
            description
        }
    }
`

export const AddTask = gql`
    mutation addTask($title: String!, $desc: String) {
        addTask(title: $title, desc: $desc) {
            id
            title
            description
        }
    }
`