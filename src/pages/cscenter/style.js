import styled from 'styled-components';

export const CsCenterVisual = styled.section`
    .inner {
        width: 100%;
        height: 600px;
    }
`;
export const FaqStyle = styled.article`
    section {
        .inner {
            background-image: url('/images/cscenter/faqVisual.jpg');
            background-position: 0 0;
            background-repeat: no-repeat;
        }
    }
    .inner {
        text-align: center;
        padding: 50px 0 150px 0;
    }
`;

export const ContactStyle = styled.article`
    section {
        .inner {
            background-image: url('/images/cscenter/contactVisual.jpg');
            background-position: 0 0;
            background-repeat: no-repeat;
        }
    }
    .inner {
        text-align: center;
        padding: 50px 0 150px 0;
        h2 {
            font-size: 40px;
            font-weight: 600;
            padding-bottom: 24px;
            margin-top: 30px;
        }
    }
`;
