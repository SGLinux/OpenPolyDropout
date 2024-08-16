'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    admissionNo: z.string().min(1, "Admission number is required"),
    email: z.string().email("Invalid email address"),
    contactNo: z.string().min(8, "Contact number must be at least 8 digits"),
    course: z.string().min(1, "Course is required"),
    sponsor: z.string().optional(),
    withdrawalReasonCode: z.string().min(1, "Withdrawal reason is required"),
    remarks: z.string().optional(),
});

const NYPWithdrawalForm = () => {
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        admissionNo: "",
        email: "",
        contactNo: "",
        course: "",
        sponsor: "",
        withdrawalReasonCode: "",
        remarks: "",
      },
    });
  
    const onSubmit = (data) => {
      console.log(data);
      // Handle form submission
    };
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="admissionNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Admission Number</FormLabel>
                <FormControl>
                  <Input placeholder="Admission number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="contactNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="Your contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course</FormLabel>
                <FormControl>
                  <Input placeholder="Your course" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="sponsor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sponsor (if any)</FormLabel>
                <FormControl>
                  <Input placeholder="Sponsor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="withdrawalReasonCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Withdrawal Reason</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="A1">Found/Seeking/Changing Employment</SelectItem>
                    <SelectItem value="B1">Family problems</SelectItem>
                    <SelectItem value="C1">Financial difficulties</SelectItem>
                    {/* Add more reasons as needed */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks (if any)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any additional remarks" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            name="agreement"
            render={() => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <input type="checkbox" required />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I understand and agree to the terms of withdrawal
                  </FormLabel>
                  <FormDescription>
                    By checking this box, you agree to abide by the instructions and notes applicable to this request.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
  
          <Button type="submit">Submit Withdrawal Request</Button>
        </form>
      </Form>
    );
  };
  
export default NYPWithdrawalForm;
  