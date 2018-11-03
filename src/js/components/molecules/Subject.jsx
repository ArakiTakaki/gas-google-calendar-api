const SUBJECTS = ["HF21", "SD25", "AN25", "BC21", "CS2D"];

function Subjects() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="Gender"
        name="subject"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <FormControlLabel value="HF21" control={<Radio />} label="HF21" />
        <FormControlLabel value="SD25" control={<Radio />} label="SD25" />
        <FormControlLabel value="AN25" control={<Radio />} label="AN25" />
        <FormControlLabel value="BC21" control={<Radio />} label="BC21" />
        <FormControlLabel value="CS2D" control={<Radio />} label="CS2D" />
        <FormControlLabel value="FX24" control={<Radio />} label="FX24" />
      </RadioGroup>
    </FormControl>
  );
}
