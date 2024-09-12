import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyfrqwfnahcckbpdmblt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZnJxd2ZuYWhjY2ticGRtYmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2Nzg4MTMsImV4cCI6MjA0MDI1NDgxM30.2KW2kLV-uks5OAUQtAPKeaU_6VXX8Vk8N6irjkKcMpM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);