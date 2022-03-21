import { gql } from "@apollo/client"

export const createBoard = gql`
  mutation createBoard ($createBoardInput:CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`