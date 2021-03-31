import moment from "moment";

export function getDateAndTimeString(time) {
    return moment(time).format("DD/MM/YYYY @ HH:mm a");
}

export function getTaskStringColor(isCompleted) {
    return isCompleted ? "gray" : "black";
}
