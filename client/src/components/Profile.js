
  
  
  <div class="col-md-4 text-right pt-2">
        <a class="text-white pr-0 mr-3" href="/user/profile"><span class="userName text-primary"></span>
            <i class="fas fa-user-circle fa-2x mt-1 ml-2 mb-2 text-primary"></i></a>
    </div>
</div>
</div>
<div class="container mt-4">
<div class="row">
    <div class="col-md-4 mx-auto text-center">
        <h2>User Profile</h2>
    </div>
</div>
</div>

<div class="form-group-usrUpdate">
<div class="row" id ="abc">
    <div class="col-md-6 mx-auto text-left">
        {{!-- Allows user to view their email --}}
        <label for="usrProfileEmail" id="usrProfileEmail">Current Email - </label><span id = "usrProfileEmailSpan">{{email}}</span>
        <hr>
        {{!-- Allows user to view their City --}}
        <label for="usrProfileCity" id ="usrProfileCity">Current City - </label><span id = "usrProfileCitySpan">{{city}}</span>
        <hr>
        {{!-- Allows user to view their State --}}
        <label for="usrProfileState" id = "usrProfileState">Current State - </label><span id = "usrProfileStateSpan">{{state}}</span>
        <hr>
        <h2 class="text-center">Update your info</h2>

        {{!-- Allows user to change their email --}}
        <label for="usrProfileEmailUpdate">Email</label>
        <input type="email" class="form-control" id="usrProfileEmailUpdate">
        <button id="submitBtnRegEmailUpdate" type="submit" class="btn btn-primary">Update Email</button>
        <hr>
        {{!-- Allows user to change their password --}}
        {{!-- <label for="usrProfilePasswordUpdate">Password</label>
        <input type="password" class="form-control" id="usrProfilePasswordUpdate">
        <button id="submitBtnRegPasswordUpdate" type="submit" class="btn btn-primary">Update Password</button>
        <hr> --}}
        {{!-- Allows user to change their city --}}
        <label for="usrProfileCityUpdate">City</label>
        <input type="input" class="form-control" id="usrProfileCityUpdate">
        <button id="submitBtnRegCityUpdate" type="submit" class="btn btn-primary">Update City</button>
        <hr>
        {{!-- Allows user to change their State from a drop down --}}
        <label for="usrProfileStateUpdate">State</label>
        <select name="state" class="form-control" id="usrProfileStateUpdate">
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
        </select>
        <button id="submitBtnRegStateUpdate" type="submit" class="btn btn-primary">Update State</button>
        <hr>

        
    </div>
</div>
</div>

<script type="text/javascript" src="/assets/js/profile.js"></script>