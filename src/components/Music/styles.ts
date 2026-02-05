import styled from "styled-components";
import { Link } from 'react-router-dom';

const Musictext = styled.p`
    text-align: center;
`;

const SongInf = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Musicimg = styled(Link)`
    display: flex;
    justify-content: center;
    margin: 0 0 15px 0;
`;

const Mimg = styled.img`
    max-width: 200px;
`;

export{
    Musictext,
    Musicimg,
    SongInf,
    Mimg,
}