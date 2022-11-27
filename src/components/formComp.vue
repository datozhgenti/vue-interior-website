<template>
  <div class="form-container">
    <form @submit.prevent>
      <div class="name">
        <div>
          <label for="name">First Name</label>
          <br />
          <input type="text" id="name" placeholder="First Name" />
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <br />
          <input type="text" id="last-name" placeholder="Last Name" />
        </div>
      </div>
      <div class="mail">
        <label for="email"> Email</label>
        <br />
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div class="phone-number">
        <label for="number"> Phone Number</label>
        <div class="phone-number-input">
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Phone Number"
          />
          <select name="country" id="country-select">
            <option value="US" selected>US</option>
            <option value="GE">GE</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>
      <div class="text-message">
        <label for="text-message"> Message</label>
        <br />
        <textarea
          name="text"
          id="text-message"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div class="submit-button">
        <button type="submit" class="btn blue">Send Massage</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-container {
  margin: 0 auto;
  width: 840px;
}
</style>

<style scoped>
input {
  padding: 18px 296px 18px 32px;
  margin-bottom: 20px;
  border: 1px solid var(--grayscale-10);
}

#name,
#last-name {
  width: 413px;
}

input::placeholder,
textarea::placeholder {
  color: var(--grayscale-10);
}

.name {
  display: flex;
  gap: 14px;
}

.mail input,
.phone-number input,
textarea {
  width: 100%;
}

.phone-number input {
  padding-left: 104px;
}

.phone-number-input {
  position: relative;
}

#country-select {
  position: absolute;
  top: 13px;
  left: 32px;
  width: 48px;
  height: 27px;
  border: none;
}

#country-select:focus {
  outline: none;
}

textarea {
  resize: none;
  height: 178px;
  padding: 20px 30px;
  display: block;
}

.submit-button {
  margin-top: 40px;
}

.btn {
  color: var(--grayscale-white);
  border: none;
  font-weight: 500;

  margin: 0 auto;
  cursor: pointer;
  display: block;
}
</style>
