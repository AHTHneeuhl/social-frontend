import { Box } from "@mui/material";

type TProps = {
  image: string;
  size?: string;
};

const UserImage: React.FC<TProps> = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`http://localhost:3001/assets/${image}`}
        alt="profile"
      />
    </Box>
  );
};

export default UserImage;
