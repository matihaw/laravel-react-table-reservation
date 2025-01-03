<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Reservation Confirmation</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #F8F5F2;
            margin: 0;
            padding: 0;
            color: #2C2C2C;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto 0 auto;
            background-color: #FFFFFF;
            border: 1px solid #D16262;
            border-radius: 8px;
            overflow: hidden;
        }

        .header {
            background-color: #A83232;
            color: #FFFFFF;
            text-align: center;
            padding: 20px;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .content {
            padding: 20px;
        }

        .content .image-wrapper {
            display: flex;
        }

        .content img {
            width: 150px;
            margin: auto;
            object-fit: cover;
            border-radius: 8px;
        }

        .content h2 {
            color: #751919;
            margin-top: 20px;
        }

        .details {
            margin: 20px 0;
            background-color: #FFD963;
            padding: 15px;
            border-radius: 8px;
            color: #000000;
        }

        .footer a {
            color: #0288D1;
            text-decoration: none;
        }
    </style>
</head>
<body>
<div class="email-container">
    <div class="header">
        <h1>Confirm Your Reservation</h1>
    </div>
    <div class="content">
        <div class="image-wrapper">
            <img src="http://localhost/images/burger.png" alt="Delicious Food">
        </div>
        <h2>Thank you for your reservation!</h2>
        <p>Dear <strong>{{$reservation->name}}</strong>,</p>
        <b> Please click <a href="{{ $reservation->getConfirmationUrl() }}">this link</a> to confirm your
            reservation.</b>
        <p>Below are the details:</p>
        <div class="details">
            <p><strong>Reservation ID:</strong> {{$reservation->id}}</p>
            <p><strong>Date:</strong> {{$reservation->reservation_date_time}}</p>
            <p><strong>Guests:</strong> {{$reservation->number_of_people}}</p>
        </div>
        <p>We look forward to serving you a delightful meal at our restaurant!</p>
        <p>If you have any questions or need to make changes to your reservation, please contact us at <a
                href="mailto:info@restaurant.com">info@restaurant.com</a>.</p>
    </div>
</div>
</body>
</html>
