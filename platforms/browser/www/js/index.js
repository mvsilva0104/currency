/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function Currencyconverter(){

    endpoint = 'live'
    access_key = '22d8605c353b209a53d9955669fc1bc6';
    
    // get the most recent exchange rates via the "live" endpoint:
    $.ajax({
        url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
    
            // exchange rata data is stored in json.quotes
            alert(json.quotes.USDBRL);
            
            // source currency is stored in json.source
            alert(json.source);
            
            // timestamp can be accessed in json.timestamp
            alert(json.timestamp);
            
        }
    });

    endpoint = 'convert';
    access_key = '22d8605c353b209a53d9955669fc1bc6';
    
    // define from currency, to currency, and amount
    from = 'USD';
    to = 'BLR';
    amount = '10';
    
    // execute the conversion using the "convert" endpoint:
    $.ajax({
        url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
        dataType: 'jsonp',
        success: function(json) {
    
            // access the conversion result in json.result
            alert(json.result);
                    
        }
    });
}