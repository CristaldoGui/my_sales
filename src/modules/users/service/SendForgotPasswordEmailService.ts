import AppError from '@shared/errors/AppError';
import { userRepositories } from '../database/repositories/UsersRepositories';
import { userTokensRepositories } from '../database/repositories/UserTokensRepositories';
import { sendEmail } from '@config/email';

interface ISendForgotPasswordEmail {
  email: string;
}

export default class SendForgotPasswordEmailService {
  async execute({ email }: ISendForgotPasswordEmail): Promise<void> {
    const user = await userRepositories.findByEmail(email);

    if (!user) throw new AppError('User not found', 404);

    const token = await userTokensRepositories.generate(user.id);

    sendEmail({
      to: email,
      subject: 'Forgot password',
      body: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redefinição de Senha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .header {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
        }
        .token {
            font-weight: bold;
            font-size: 18px;
            color: #d9534f;
            background: #f8d7da;
            padding: 10px;
            display: inline-block;
            border-radius: 5px;
        }
        .footer {
            font-size: 14px;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Verificação de Redefinição de Senha</div>
        <div class="content">
            Caro <strong>{${user.name}}</strong>,<br><br>
            Recupere sua senha com este token:<br>
            <div class="token">{${token?.token}}</div>
        </div>
        <div class="footer">
            Se você não solicitou esta redefinição, ignore este e-mail.
        </div>
    </div>
</body>
</html>
`,
    });
  }
}
