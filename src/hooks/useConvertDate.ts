const useConvertDate = (date?: Date) => {
	const year = date?.getFullYear();
	const month = date && date?.getMonth() + 1;
	const day = date?.getDate();
	const hours = date?.getHours();
	const minutes = date?.getMinutes();
	
	return `${day}/${month}/${year} - ${hours !== undefined && hours < 10 ? `0${hours}` : hours}:${minutes !== undefined && minutes < 10 ? `0${minutes}` : minutes}`;
}

export default useConvertDate;