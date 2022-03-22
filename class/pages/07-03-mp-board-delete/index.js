import {useQuery, gql, useMutation} from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            writer
            title
            contents
            number
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number:$number) {
            message
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    width: 25%;

`



export default function StaticRoutedPage() {
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const{data} = useQuery(FETCH_BOARDS)

    const onClickDelete = (e) => {
        deleteBoard({
            variables:{ number: Number(e.target.id)},
            refetchQueries: [{ query: FETCH_BOARDS}]
        })
    }

    return(
        <>
            {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
            {data?.fetchBoards.map((el, index) =>
                <Row key={el.number}>
                    <Column><input type="checkbox"/></Column> 
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            )}
        </>
       
    
    )

}
