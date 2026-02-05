import styled from "styled-components";

interface SongsProps {
    error?: string | null;
}

const BarFather = styled.div`
    display: flex;
    justify-content: center;
`;

const Bar = styled.input<SongsProps>`
    all: unset;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 10px 20px;
    border: 2px solid ${props => (props.error ? "red" : "white")};
    max-width: 400px;
    width: 100%;
    margin: 0 15px;
    align-self: center;
`;

const SearchMain = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 10px;
`;

const SearchEle = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    gap: 20px;
    padding: 15px;   
`;

const AddLibrary = styled.button`
    all: unset;
    align-self: center;
    background-color: ${props => props.theme.colors.button};
    padding: 10px;
    border-radius: 30px;
    color: ${props => props.theme.colors.textSecondary};
    cursor: pointer;
`;

const AtLibrary = styled.p`
    background-color: ${props => props.theme.colors.backgroundSecondary};
    cursor: auto;
    color: ${props => props.theme.colors.textSecondary};
    align-self: center;
    border-radius: 30px;
    padding: 10px;
`;

const NoContent = styled.p`
    text-align: center;
    margin: 100px 0 0;
    padding: 20px;
    font-size: clamp(15px, 2vw, 100px);
`;

export{
    AddLibrary,
    AtLibrary,
    SearchEle,
    SearchMain,
    Bar,
    BarFather,
    NoContent,
}