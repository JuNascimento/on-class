namespace OnClass.Extensions
{
    public static class DateHelper
    {
        public static bool Between(this DateTime currentDate, DateTime minValue, DateTime maxValue)
        {
            return currentDate.CompareTo(minValue) >= 1 && maxValue.CompareTo(currentDate) >= 1;
        }

        public static bool ValidarHoraDia(this DateTime date)
        {
            return (date.Hour >= 7 && date.Hour < 22);
        }
    }
}
