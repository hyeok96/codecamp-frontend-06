import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents:String) {
        createBoard(writer: $writer, contents : $contents, title:$title) {
            message
        }
    }
`