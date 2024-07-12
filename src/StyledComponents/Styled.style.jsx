import styled from "styled-components";

export const EventInputBorder = {
    border: '1px solid #ced4da',
    borderRadius: '4px',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width:'250px',
    fontFamily: 'Graphik',
    fontWeight: '500',
};

export const ResponsiveCreateEvent = styled.div`
/* Default width for any viewport */
width: 100%; 

/* Tablet view */
/* @media (min-width: 320px) and (max-width: 425px) {
    width: 300px;
} */

/* Desktop view */
@media (min-width: 767px) {
  width: 570px;
}
`;

export const ResponsivePreEvent = styled.div`
/* Default width for any viewport */
width: 100%; 

/* Tablet view */
/* @media (min-width: 320px) and (max-width: 425px) {
    width: 300px;
} */

/* Desktop view */
@media (min-width: 767px) {
  width: 570px;
}
`;

export const ResponsiveUpdateEvent = styled.div`
/* Default width for any viewport */
width: 100%; 

/* Tablet view */
/* @media (min-width: 320px) and (max-width: 425px) {
    width: 300px;
} */

/* Desktop view */
@media (min-width: 767px) {
  width: 370px;
}
`;

export const ResponsiveInputField = styled.div`
/* Default width for any viewport */
margin-left: 0px;

/* Tablet view */
/* @media (min-width: 320px) and (max-width: 425px) {
    width: 300px;
} */

/* Desktop view */
@media (min-width: 767px) {
  margin-left: 50px;
}
`;