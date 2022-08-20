import { motion } from "framer-motion";
import { Box } from "@mui/system";

const IntroScreen = () => {
	return (
		<Box sx={{}}>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					duration: 2,
				}}>
				Hi there
			</motion.div>
		</Box>
	);
};

export default IntroScreen;
