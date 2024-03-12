namespace Domain;

// Entity Framework Model or Entity, used for a record in the database
// Each property will be a column in the database
public class Activity
{
    // Specifically Id because Entity Framework will look for a property with this name
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Venue { get; set; }
}
