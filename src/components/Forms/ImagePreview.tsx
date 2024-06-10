export const ImagePreview = ({ image }) => {
	if (!image) {
		return <></>
	}

	return (
		<img
			src={image}
			className="w-full h-[200px] object-contain bg-stone-200 rounded-md"
			alt="Temporal image"
		/>
	)
}
