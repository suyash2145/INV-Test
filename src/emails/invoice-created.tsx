// import {
//     Body,
//     Button,
//     Container,
//     Head,
//     Heading,
//     Hr,
//     Html,
//     Img,
//     Link,
//     Preview,
//     Section,
//     Text,
//   } from '@react-email/components';
//   import * as React from 'react';
  
//   interface LinearLoginCodeEmailProps {
//     invoiceId: number;
//   }
  
// //   const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  
//   export const LinearLoginCodeEmail = ({
//     invoiceId,
//   }: LinearLoginCodeEmailProps) => (
//     <Html>
//       <Head />
//       <Body style={main}>
//         <Preview>Your login code for Linear</Preview>
//         <Container style={container}>
//           <Heading style={heading}>New Invoice {invoiceId}</Heading>
//           <Text style={paragraph}>
//             Hello! You have new invoice to pay...
//           </Text>
//           <Section style={buttonContainer}>
//             <Button style={button} href={`${baseUrl}/invoices/${invoiceId}/payment`}>
//               PAY NOW
//             </Button>
//           </Section>
//           {/* <Text style={paragraph}>
//             This link and code will only be valid for the next 5 minutes. If the
//             link does not work, you can use the login verification code directly:
//           </Text> */}
//           <Hr style={hr} />
//           <Link href="https://suyashinvoice.online" style={reportLink}>
//             Invoice Management
//           </Link>
//         </Container>
//       </Body>
//     </Html>
//   );
  
//   LinearLoginCodeEmail.PreviewProps = {
//     invoiceId: 1234,
//   } as LinearLoginCodeEmailProps;
  
//   export default LinearLoginCodeEmail;
  
//   const logo = {
//     borderRadius: 21,
//     width: 42,
//     height: 42,
//   };
  
//   const main = {
//     backgroundColor: '#ffffff',
//     fontFamily:
//       '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
//   };
  
//   const container = {
//     margin: '0 auto',
//     padding: '20px 0 48px',
//     maxWidth: '560px',
//   };
  
//   const heading = {
//     fontSize: '24px',
//     letterSpacing: '-0.5px',
//     lineHeight: '1.3',
//     fontWeight: '400',
//     color: '#484848',
//     padding: '17px 0 0',
//   };
  
//   const paragraph = {
//     margin: '0 0 15px',
//     fontSize: '15px',
//     lineHeight: '1.4',
//     color: '#3c4149',
//   };
  
//   const buttonContainer = {
//     padding: '27px 0 27px',
//   };
  
//   const button = {
//     backgroundColor: '#5e6ad2',
//     borderRadius: '3px',
//     fontWeight: '600',
//     color: '#fff',
//     fontSize: '15px',
//     textDecoration: 'none',
//     textAlign: 'center' as const,
//     display: 'block',
//     padding: '11px 23px',
//   };
  
//   const reportLink = {
//     fontSize: '14px',
//     color: '#b4becc',
//   };
  
//   const hr = {
//     borderColor: '#dfe1e4',
//     margin: '42px 0 26px',
//   };
  
//   const code = {
//     fontFamily: 'monospace',
//     fontWeight: '700',
//     padding: '1px 4px',
//     backgroundColor: '#dfe1e4',
//     letterSpacing: '-0.3px',
//     fontSize: '21px',
//     borderRadius: '4px',
//     color: '#3c4149',
//   };
  


import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  interface InvoiceCreatedEmailProps {
    invoiceId: number;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
  export const InvoiceCreatedEmail = ({
    invoiceId,
  }: InvoiceCreatedEmailProps) => (
    <Html>
      <Head />
      <Preview>Your Invoice Payment</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Invoice {invoiceId}</Heading>
          <Text style={paragraph}>
            Dear Customer,

            This is mail to pay your invoice.
            
            Since You are not paid invoice so we generated this for You. 
          </Text>
          <Section style={buttonContainer}>
            <Button
              style={button}
              href={`${baseUrl}/invoices/${invoiceId}/payment`}
            >
              Pay Invoice
            </Button>
          </Section>
          <Hr style={hr} />
          <Link href="https://suyashinvoice.online" style={reportLink}>
           Suyash Invoice
          </Link>
        </Container>
      </Body>
    </Html>
  );
  
  InvoiceCreatedEmail.PreviewProps = {
    invoiceId: 1234,
  } as InvoiceCreatedEmailProps;
  
  export default InvoiceCreatedEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const paragraph = {
    margin: "0 0 15px",
    fontSize: "15px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const buttonContainer = {
    padding: "27px 0 27px",
  };
  
  const button = {
    backgroundColor: "#5e6ad2",
    borderRadius: "3px",
    fontWeight: "600",
    color: "#fff",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "11px 23px",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#b4becc",
  };
  
  const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
  };