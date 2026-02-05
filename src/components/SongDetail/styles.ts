import styled from "styled-components";

const Details = styled.div`
    > :first-child{
        cursor: auto;
    }
`;

const NContent = styled.p`
    text-align: center;
    margin: 100px 0 0;
    padding: 20px;
    font-size: clamp(15px, 2vw, 100px);
`;

export{
    Details,
    NContent,
}