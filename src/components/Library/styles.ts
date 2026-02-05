import styled from "styled-components";

const UserImg = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 0 30px 0;
    
    > :first-child{
        max-width: 350px;
        align-self: center;
    }

    > :nth-child(2){
        text-align: center;
        font-weight: bold;
        font-size: 50px;

    }
`;

const LibraryList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    padding: 10px; 
`;

const LibraryELement = styled.li`
    padding: 10px;
    display: flex;
    justify-content: space-between;

    > :nth-child(1){
        margin: 0;
    }

    > :nth-child(2){
        flex-direction: row;
        align-items: center;

         
        > :last-child{
            opacity: 0.7; 
        }
    }
`;

const RemoveButton = styled.button`
    all: unset;
    cursor: pointer;

    svg{
        width: 100px;
    }
`;

export{
    UserImg,
    LibraryList,
    LibraryELement,
    RemoveButton,
}