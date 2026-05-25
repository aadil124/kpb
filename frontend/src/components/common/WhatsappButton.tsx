import { Fab } from "@mui/material";

import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Fab
      color="success"
      href="https://wa.me/919999999999"
      target="_blank"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <FaWhatsapp size={28} />
    </Fab>
  );
};

export default WhatsappButton;